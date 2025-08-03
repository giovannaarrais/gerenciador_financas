import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

function AlertInfoTransacoes( props ){
    return (
        <Drawer>
            <DrawerTrigger>{ props }</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>{ props }</DrawerTitle>
                <DrawerDescription>{ props }</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <DrawerClose>
                    <button>Fechar</button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default AlertInfoTransacoes;