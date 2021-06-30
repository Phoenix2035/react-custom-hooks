/**
 * Author : alithecodeguy
 * Github : https://github.com/alithecodeguy
 * Linkedin : https://www.linkedin.com/in/alithecodeguy/
 * Telegram channel : https://t.me/alithecodeguy
 * Youtube : https://youtube.com/alithecodeguy
 * Instagram : https://www.instagram.com/alithecodeguy/
 *
 * Inspired by : https://stackoverflow.com/questions/32553158/detect-click-outside-react-component/44378829
 *
 * ******* Please like and subscribe on social networks if this file was useful for you.
 */

import { useEffect, useState } from "react";
/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideAlerter(ref) {
  const [outsideClick, setOutsideClick] = useState(false);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return setOutsideClick(true);
      } else return setOutsideClick(false);
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return outsideClick;
}
