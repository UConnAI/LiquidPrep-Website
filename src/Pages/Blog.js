import { Center, HStack, Text, Stack } from "@chakra-ui/react";
import React from "react";
import BlogCard from "../components/BlogCard";

function BlogPage() {
    return(
        <div>
            {/* <HStack> */}
                <Center padding={"3rem"}>
                    <Stack>
                        <Text fontSize="3xl">
                            Featured Blog Posts
                        </Text>
                        <HStack padding={"3rem"}>
                            <BlogCard cardText={"Hello world!"} />
                            <BlogCard cardText={"Hello world!"} />
                            <BlogCard cardText={"Hello world!"} />
                        </HStack>
                    </Stack>
                </Center>
            {/* </HStack> */}
        </div>
    );
}

export default BlogPage;