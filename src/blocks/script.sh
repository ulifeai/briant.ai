#!/bin/bash

# List of folder names
folders=(
    "Header navigations"
    "Header sections"
    "Features sections"
    "Pricing sections"
    "CTA sections"
    "Metrics sections"
    "Newsletter CTA sections"
    "Testimonial sections"
    "Social proof sections"
    "Press mentions sections"
    "Blog sections"
    "Blog post sections"
    "Content & rich text sections"
    "Contact sections"
    "Team sections"
    "Careers sections"
    "FAQ sections"
    "Footers"
    "Banners"
)

# Function to create React component file
create_component_file() {
    folder_name="$1"
    component_name="${folder_name// /}"

    # Create the default directory and component file
    mkdir -p "$folder_name/default"
    cat <<EOF > "$folder_name/default/Component.tsx"
import React from 'react';

const ${component_name}Component: React.FC = () => {
    return (
        <div>
            <h1>${folder_name}</h1>
            <p>This is the ${folder_name} component.</p>
        </div>
    );
};

export default ${component_name}Component;
EOF
}

# Create each folder and its component
for folder in "${folders[@]}"; do
    create_component_file "$folder"
    echo "Created folder: $folder/default/Component.tsx"
done

echo "All folders and components created successfully."
