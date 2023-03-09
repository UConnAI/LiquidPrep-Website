import React from "react";

import { Stack, HStack, Text, Center, Container, Card, CardBody, Image, Button, CardFooter } from '@chakra-ui/react'


function BlogPost(props) {
    return (
        <div style={{ padding:'2rem' }}>
            <Center>
                <Card size='md' direction={{ base:'column', sm: 'row' }}>
                    <Stack>
                        <Text padding={'2rem'} align={'left'} fontSize='3x1' fontWeight="semibold">
                            {props.heading}
                        </Text>
                        <CardBody>
                            <Container textAlign={"left"}>
                                <Stack>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
                                    </Text>
                                    <Button
                                        borderRadius={"150px"}
                                        background={"#fffffff"}
                                        borderColor={"black"}
                                        variant={"outline"}
                                        width={"7rem"}
                                    >
                                        Read More
                                    </Button>
                                </Stack>
                            </Container>
                        </CardBody>
                    </Stack>
                    <Image
                        boxSize={'480px'}
                        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                        alt='Caffe Latte'
                    />
                    <CardFooter>
                    </CardFooter>
                </Card>

            </Center>
        </div>
    )
}


export default BlogPost;