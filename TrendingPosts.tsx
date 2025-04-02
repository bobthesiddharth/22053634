import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { fetchAllPosts, fetchPostComments } from "./services/api";
import { generateRandomImage } from "./utils/helpers";

export default function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingPosts = async () => {
      try {
        const posts = await fetchAllPosts();
        const postsWithComments = await Promise.all(
          posts.map(async (post) => {
            const comments = await fetchPostComments(post.id);
            return { ...post, commentCount: comments.length };
          })
        );

        const maxComments = Math.max(
          ...postsWithComments.map((p) => p.commentCount)
        );
        const trending = postsWithComments.filter(
          (p) => p.commentCount === maxComments
        );
        setTrendingPosts(trending);
      } catch (error) {
        console.error("Error fetching trending posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getTrendingPosts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Trending Posts
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <div>
          {trendingPosts.map((post) => (
            <Card key={post.id} style={{ marginBottom: 20 }}>
              <img
                src={generateRandomImage()}
                alt="Post"
                style={{ width: "100%", height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{post.content}</Typography>
                <Typography color="textSecondary">
                  Comments: {post.commentCount}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
}
