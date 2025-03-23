export interface Article {
  name: string
  title: string
  short: string
  tags: Array<string>
  publishDate: string
  lastUpdate: string
  authors: Array<Author>
  bibliography: Array<Bibliography>
  reviewers: Array<Reviewer>
}

export interface Author {
  author: string
  link: string
  photo: string
  title: string
  mail: string
}

export interface Bibliography {
  title: string
  link: string
  ISBN: string
  type: string
  author: string
}

export interface Reviewer {
  reviewer: string
  link: string
}

export interface ArticleContentRaw {
  title: string
  raw: string
}
