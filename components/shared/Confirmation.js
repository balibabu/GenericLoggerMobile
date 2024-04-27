import { Alert } from "react-native";

export async function Confirmation(title, message) {
    const confirmDelete = await new Promise((resolve) => {
        Alert.alert(
            title,
            message,
            [
                { text: "Cancel", style: "cancel", onPress: () => resolve(false) },
                { text: "Delete", onPress: () => resolve(true) },
            ],
            { cancelable: true }
        );
    });
    return confirmDelete;
}

// export async function AlertToast(title, message) {
//     const confirmDelete = await new Promise((resolve) => {
//         Alert.alert(
//             title,
//             message,
//             [
//                 { text: "Cancel", style: "cancel", onPress: () => resolve(false) },
//                 { text: "Delete", onPress: () => resolve(true) },
//             ],
//             { cancelable: true }
//         );
//     });
//     return confirmDelete;
// }