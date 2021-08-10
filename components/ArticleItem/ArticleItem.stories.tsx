import ArticleItem from './ArticleItem'

export default {
  title: 'ArticleItem',
  component: ArticleItem,
}

export const Simple = () => (
  <ArticleItem
    post={{
      language: 'en',
      date: '2020-01-01',
      title: 'Nunc hendrerit sed tellus eu vehicula',
      id: 'lorem-ipsum',
      description:
        'Nam orci lectus, eleifend at vestibulum quis, fringilla ac enim. Duis non semper elit, et mollis nulla. Sed lobortis velit a rhoncus commodo. Donec posuere enim congue, varius nisi ac, ultricies diam.',
    }}
  />
)

export const WithSerieAndEpisode = () => (
  <ArticleItem
    post={{
      language: 'en',
      date: '2020-01-01',
      title: 'Nunc hendrerit sed tellus eu vehicula',
      id: 'lorem-ipsum',
      description:
        'Nam orci lectus, eleifend at vestibulum quis, fringilla ac enim. Duis non semper elit, et mollis nulla. Sed lobortis velit a rhoncus commodo. Donec posuere enim congue, varius nisi ac, ultricies diam.',
      serie: 'Lorem Ipsum',
      episode: 1,
    }}
  />
)
