import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { fetchAllPosts, fetchPostComments } from "./services/api";
import { generateRandomImage } from "./utils/helpers";

export default function Feed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const allPosts = await fetchAllPosts();
        setPosts(allPosts.sort((a, b) => b.id - a.id));
      } catch (error) {
        console.error("Error fetching feed:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
    const interval = setInterval(getPosts, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Real-time Feed
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <div>
          {posts.map((post) => (
            <Card key={post.id} style={{ marginBottom: 20 }}>
              <img
                src={generateRandomImage()}
                alt="Post"
                style={{ width: "100%", height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{post.content}</Typography>
                <Typography color="textSecondary">
                  Post ID: {post.id} | User ID: {post.userid}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
}
