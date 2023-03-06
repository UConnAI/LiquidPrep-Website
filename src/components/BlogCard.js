import React from "react";

import { Center, Stack, HStack, Card, CardBody, Image, Text, Heading } from "@chakra-ui/react";

function BlogCard(props) {
    return (
        <div>
            <Card maxW={"sm"}>
                <CardBody>
                  <Image
                    src={props.picture}
                    borderRadius="lg"
                  />
                  <Stack mt={6} textAlign={"left"}>
                    <Heading size={"md"}>Blog Post Heading</Heading>
                    <Text>
                      {props.cardText}
                    </Text>
                  </Stack>
                </CardBody>
            </Card>
        </div>
    )
}

export default BlogCard;