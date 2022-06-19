import { Text } from "react-native";
import styles from "./InstructionText.style"

export default function InstructionText({children,style}){
    return <Text style={[styles.instructionText,style]}>{children}</Text>
}