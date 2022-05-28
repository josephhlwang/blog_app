import { gql, GraphQLClient } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export default async function comments(req: any, res: any) {
  const { name, email, comment, slug } = req.body

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `
  try {
    const result = await graphQLClient.request(query, {
      name,
      email,
      comment,
      slug,
    })
    return res.status(200).send(result)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
}
