import React, { memo, FC } from "react"
import { Box, Stack, Text } from "@chakra-ui/react"
import { PicsumImage } from "../../atoms/image/PicsumImage"

type Props = {
  id: number
  name: string
  alphabetName: string
  onClick: (id: number) => void
}

export const UserCard: FC<Props> = memo((props) => {
  const { id, name, alphabetName, onClick } = props
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p="4" _hover={{ cursor: "pointer", opacity: 0.8 }} onClick={() => onClick(id)}>
      <Stack textAlign="center" spacing={0}>
        <PicsumImage />
        <Text fontSize="lg" fontWeight="bold" m={0} mt={5}>
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {alphabetName}
        </Text>
      </Stack>
    </Box>
  )
})
