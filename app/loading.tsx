import { Container, Loader } from "@mantine/core";

export default function Loading(){
    return(
        <>
            <Container>
                <Loader color="blue" size="xl" />
            </Container>
        </>
    )
}