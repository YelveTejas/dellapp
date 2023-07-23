import React, { useState } from "react";
import { Computerdata } from "./data";
import {
  Box,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Tooltip,
  Text,
  Center,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(Computerdata);
  const [search, setSearch] = useState("");
  console.log(data);

  const filtered = data.filter((e, i) => {
    return e["Product Name"].toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <Center mt="10px">
        <Input
          w="9cm"
          onChange={(e) => setSearch(e.target.value)}
          size="md"
          placeholder="Search by Name"
        />
      </Center>
      <Box w="90%" margin="auto" mt="1cm">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {filtered.map((product, index) => (
         
              <Tooltip
                key={index}
                label={product["Product Name"]}
                aria-label="Product Tooltip"
                placement="top"
              >
                <Box
                  borderWidth="1px"
                  borderRadius="md"
                  p={4}
                  _hover={{ boxShadow: "md", cursor: "pointer" }}
                >
                  <Image
                    src={product.Image}
                    alt={product["Product Name"]}
                    borderRadius="md"
                    mb={4}
                  />
                  <Heading as="h3" fontSize="lg" mb={2}>
                    {product["Product Name"]}
                  </Heading>
                  <Text fontSize="md" mb={2}>
                    Type: {product["Product Type"]}
                  </Text>
                  <Text fontSize="md" fontWeight="bold" mb={2}>
                    Processor: {product.Processor}
                  </Text>
                  <Text fontSize="md" fontWeight="bold" mb={2}>
                    Price: ₹{product.Price.toFixed(2)}
                  </Text>
                  {/* Add other product details here */}
                  <Text fontSize="md" fontWeight="bold" mb={2}>
                   Storage: {product.Storage}
                  </Text>
                  <Text fontSize="md" fontWeight="bold" mb={2}>
                    Ram: {product.RAM}
                  </Text>
                </Box>
              </Tooltip>
         
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
