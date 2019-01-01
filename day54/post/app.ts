enum PostStatus {
  Unpublished,
  Published,
  Draft
}

interface Post {
  title: string
  content?: string
  status: PostStatus
}

let post: Post = {
  title: '过五关斩六将，去了鹅厂',
  status: PostStatus.Draft,
  content: '春招以来， 我的面试是这么般这么般一个过程'
}

console.log(post)
console.log(PostStatus[0])
