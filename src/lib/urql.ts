import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/ckzpowkwq52qu01z3frr76c09/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
})

export { client, ssrCache }