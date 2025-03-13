import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    gap: 14,
    height: 56,
    margin: 5,
    maxHeight: 56,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.blue[800],
  },
  Title: {
    fontSize: 16,
    color: colors.gray[200],
    fontFamily: fontFamily.semiBold,
  }
})