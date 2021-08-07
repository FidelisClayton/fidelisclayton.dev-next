import ArticleItem from './ArticleItem'

export default {
  title: 'ArticleItem',
  component: ArticleItem,
}

export const Default = () => (
  <ArticleItem
    post={{
      title: 'Hello World',
      id: 'hello-world',
      date: '2020-01-01T00:00:00Z',
      description: 'Hello World.',
      serie: 'Hello World',
      episode: 1,
    }}
  />
)
