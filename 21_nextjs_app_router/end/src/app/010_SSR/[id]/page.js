import { ENDPOINT } from '@/constants'
import Article from '@/components/article'

export async function generateStaticParams() {
  const res = await fetch(ENDPOINT)
  const articles = await res.json()

  return articles.map(article => ({
    id: article.id.toString(),
  }))
}

export default async function SSR({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then(res =>
    res.json()
  )

  return <Article data={article} />
}
