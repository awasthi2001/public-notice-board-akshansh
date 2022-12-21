import { Box, Text } from "@chakra-ui/react";
import React from "react";
const CaclulateTime = (createdAt) => {
  console.log(createdAt);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = createdAt.split("T")[0].split("-").map(Number);
  console.log(date);
  return `${date[2]} ${months[date[1] - 1]} ${date[0]} `;
};
export const NoticeCard = ({ notices, loading }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
      {loading ? (
        <img
          style={{ width: "400px", marginLeft: "-20px" }}
          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
          alt="loading"
        />
      ) : (
        notices.map(({ _id, notice, createdAt, username }) => {
          return (
            <Box border="1px solid black" p="5px" w="70%" key={_id} mb="10px">
              <Text fontSize="18px">{notice}</Text>
              <Box display="flex" justifyContent="space-between" mt="5px">
                <Text fontSize="13px">{username}</Text>
                <Text fontSize="13px">{CaclulateTime(createdAt)}</Text>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
  );
};
