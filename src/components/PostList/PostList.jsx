import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <div key={post.id}>
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
