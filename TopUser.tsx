import { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { fetchUsers, fetchUserPosts } from "./services/api";
import { generateRandomImage } from "./utils/helpers";

export default function TopUsers() {
  const [topUsers, setTopUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopUsers = async () => {
      try {
        const users = await fetchUsers();
        const usersWithPostCount = await Promise.all(
          Object.entries(users).map(async ([userId, userName]) => {
            const posts = await fetchUserPosts(userId);
            return { id: userId, name: userName, postCount: posts.length };
          })
        );

        const sortedUsers = usersWithPostCount
          .sort((a, b) => b.postCount - a.postCount)
          .slice(0, 5);
        setTopUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching top users:", error);
      } finally {
        setLoading(false);
      }
    };

    getTopUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Top Users
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={3}>
          {topUsers.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card>
                <img
                  src={generateRandomImage()}
                  alt="User"
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography>Posts: {user.postCount}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
