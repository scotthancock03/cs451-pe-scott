Input
The application accepts data through two sources. Users provide text input via a TextInput component to specify a favorite course. Additionally, the program imports an image asset, icon.png, from the local file system to serve as the visual header for the interface.

Process
The code organizes this information using an internal stylesheet to manage the layout and design. I defined specific rules for yellow header backgrounds and custom fonts to keep the curriculum readable. The logic also applies a width constraint on the elective description to ensure proper text wrapping, while a ScrollView container allows the user to scroll through the full list without anything getting cut off.

Output
The output is a rendered curriculum requirements. It displays the imported logo, an outlined input field, and organized course lists categorized by degree requirements. The final interface provides a visual hierarchy with highlighted headers for core, computer science, elective credits, and capstone project.