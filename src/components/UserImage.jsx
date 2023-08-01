import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  // Check if 'image' is provided before rendering the 'img' element
  if (!image) {
    // Provide a default placeholder image or any alternative content
    return (
      <Box width={size} height={size} sx={{ backgroundColor: "#ccc" }}>
        No Image
      </Box>
    );
  }

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;

