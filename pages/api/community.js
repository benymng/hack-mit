import { Pinecone } from "@pinecone-database/pinecone";

const configurePineconeDb = async () => {
  const pinecone = new Pinecone({
    environment: "asia-southeast1-gcp-free",
    apiKey: process.env.PINECONE_API,
  });
  const index = pinecone.Index("hack-mit");
  return index;
}

const insertIntoVectorDatabase = async (userId, values) => {
  const pineConeIndex = await configurePineconeDb();
  let pineConeResult = await pineConeIndex.upsert([
    {
      id: userId,
      values: values,
    },
  ]);
}

const getUserCommunity = async (userId) => {
  // Get the Pinecone index
  const pineConeIndex = await configurePineconeDb();

  // Fetch the user's vector
  const fetchUserResponse = await pineConeIndex.fetch([userId])
  const userValues = fetchUserResponse.records[userId].values
  const matches = await pineConeIndex.query({
    vector: userValues,
    topK: 10,
  })
  const similarUsers = [];
  matches.matches.map((user) => {
    similarUsers.push(user.id);
  })
  return similarUsers
};


export default async function handler(req, res) {
  // insertIntoVectorDatabase('123123', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  // console.log(await getUserCommunity('123123'))

  res.status(200).send({ message: 'hello world' });
  // if (req.method === 'POST') {
  //   insertIntoVectorDatabase('123123', ['1', '2', '3', '4', '5', '6', '7', '8']);
  // }
  // else if (req.method === 'GET') {
  //   getUserCommunity()
  // }
}
