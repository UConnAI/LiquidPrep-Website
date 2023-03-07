import React from "react";

import { Stack, HStack, Text, Center, Container, Card, CardBody } from '@chakra-ui/react'


function BlogPost(props) {
    return (
        <div style={{ padding:'2rem' }}>
            <Center>
                <Card>
                    <CardBody>
                        <Text fontSize={'5x1'}>
                            {props.heading}
                        </Text>
                    </CardBody>
                </Card>

            </Center>
        </div>
    )
}


export default BlogPost;