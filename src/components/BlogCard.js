import React from "react";

import { Center, Stack, HStack, Card, CardBody, Image, Text, Heading, Button } from "@chakra-ui/react";

function BlogCard(props) {
    return (
        <div style={{ padding: '1rem' }}>
          <Center>
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
                    <Button>
                      Read More
                    </Button>
                  </Stack>
                </CardBody>
            </Card>
          </Center>
        </div>
    )
}

export default BlogCard;