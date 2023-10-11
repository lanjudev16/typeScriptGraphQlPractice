import { gql } from "./__generated__";


export const getContinents = gql(`
query graphqlGet {
    continents{
     name,
     code
   }
   }
`);
