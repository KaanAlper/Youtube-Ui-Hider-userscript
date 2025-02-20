# YouTube UI Hide on Arrow Keys, Show on Mouse Move  

This script enhances the YouTube viewing experience by hiding the user interface (UI) when using arrow keys and making it visible only when the mouse moves.  

## How It Works  

1. **Automatic UI Detection**  
   - The script dynamically selects all YouTube UI elements that begin with the class `.ytp-`, ensuring it applies to all relevant controls.  

2. **UI Hides on Arrow Key Press**  
   - When using **Arrow Left**, **Arrow Right**, **Arrow Up**, or **Arrow Down**, the UI will be hidden after a short delay.  

3. **Mouse Movement Restores UI**  
   - Moving the mouse will instantly bring back the UI, but if no further movement is detected for **2 seconds**, it will automatically hide again.  

## Key Features  

- **Distraction-Free Viewing** → The UI remains hidden when using keyboard controls.  
- **Mouse-Activated Visibility** → The UI only appears when the user actively interacts with the screen.  
- **Automatic UI Detection** → Works on all YouTube UI elements without requiring manual updates.  
- **Future-Proof** → The script dynamically adjusts to potential YouTube UI changes.  

## Benefits  

This approach creates a more immersive and seamless video-watching experience. By preventing UI pop-ups when navigating with arrow keys, users can focus on content without interruptions while still having easy access to controls when needed.  

## Installation  

1. Install [ViolentMonkey](https://violentmonkey.github.io/get-it/) or [TemperMonkey](https://www.tampermonkey.net) or another script extension for your browser.  
2. Click **"Create a new script"** in the ViolentMonkey dashboard, or you can install it directly from [GreasyFork](https://greasyfork.org/en/scripts/526981-youtube-hide-ui-on-arrow-keys-show-on-mouse-move)
3. Copy and paste the script code into the editor.  
4. Save and enable the script.  
5. Enjoy a cleaner YouTube experience!  

## License  

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.  
You are free to use, modify, and distribute this script under the terms of the GPL-3.0 license.  
See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) file for more details.  

