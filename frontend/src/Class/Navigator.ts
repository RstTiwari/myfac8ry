import { useNavigate } from "react-router-dom";  // Import `useNavigate` from React Router

export class NavigationHelper {
    // Method to navigate to a new route/page using React Router's useNavigate
    static navigateTo(path: string, replaceCurrent: boolean = false): void {
        // Use useNavigate inside a component or function (to ensure it's within React's render cycle)
        const navigate = useNavigate();

        try {
            if (replaceCurrent) {
                navigate(path, { replace: true });  // Replace the current route in the history stack
            } else {
                navigate(path);  // Navigate to the provided path
            }
        } catch (error) {
            console.error("Error navigating with React Router:", error);
        }
    }

    // Method to navigate to an external URL or open a new page/tab
    static navigateToExternal(url: string, openInNewTab: boolean = false): void {
        try {
            if (openInNewTab) {
                // Open the URL in a new tab
                window.open(url, "_blank");
            } else {
                // Change the URL and push it to the browser history
                window.location.href = url;
            }
        } catch (error) {
            console.error("Error navigating to the external URL:", error);
        }
    }
}
