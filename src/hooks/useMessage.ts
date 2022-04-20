import { useToast } from "@chakra-ui/react"
import { useCallback } from "react";

export const useMessage = () => {
  const toast = useToast();
  type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
  };

  const showMessage = useCallback((props: Props) => {
    const {title,status} = props;
    // プロパティ名: 値名が同じの場合、プロパティ名を省略できる。
    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true
    });
  },[]);

  //callbackの戻り値のオブジェクトもプロパティ名を省略できる
  return {showMessage};
}