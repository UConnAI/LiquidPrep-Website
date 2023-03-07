import { Center, HStack, Text, Stack } from "@chakra-ui/react";
import React from "react";
import BlogCard from "../components/BlogCard";
import BlogPost from "../components/BlogPost";

function BlogPage() {
    return (
        <div>
            <Center padding={"3rem"}>
                <Stack>
                    <Text fontSize="3xl">
                        Featured Blog Posts
                    </Text>
                    <HStack padding={"3rem"}>
                        <BlogCard cardText={"Hello world!"}  
                                  picture={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}           
                        />

                        <BlogCard cardText={"Hello world!"}
                                  picture={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} 
                        />
                        
                        <BlogCard cardText={"Hello world!"} 
                                  picture={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                        />
                    </HStack>
                </Stack>
            </Center>
            <Stack backgroundColor='white'>
                <Text align={'left'} padding={'5rem'} fontSize="2xl">
                    All Blog Posts
                </Text>
                <BlogPost
                    heading={'Blog Post heading goes here'}
                />
                <BlogPost
                    heading={'Blog Post heading goes here'}
                />
                <BlogPost
                    heading={'Blog Post heading goes here'}
                />
            </Stack>
        </div>
    );
}

export default BlogPage;