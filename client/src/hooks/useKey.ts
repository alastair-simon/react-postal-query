import { useEffect } from "react";

export function useKey(modifier: string | null, key:string, action:(e:KeyboardEvent | null)=> void ) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {

            if ( modifier && e[(modifier + "Key") as keyof KeyboardEvent] === true && e.key === key) {
                action(e || null );
            } else if (
              !modifier && e.key === key
            ) {
               action(e|| null);
            }
        }
            document.body.addEventListener("keydown", handleKeyDown);
            return () => {
                document.body.removeEventListener("keydown", handleKeyDown);
            };
        }, [action, key]);
}
