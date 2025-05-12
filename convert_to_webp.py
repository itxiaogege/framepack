from PIL import Image
import os

def convert_to_webp(source_dir):
    # Create webp directory if it doesn't exist
    webp_dir = os.path.join(source_dir, 'webp')
    if not os.path.exists(webp_dir):
        os.makedirs(webp_dir)
    
    # Supported image formats
    supported_formats = ['.png', '.jpg', '.jpeg']
    
    # Convert each image
    for filename in os.listdir(source_dir):
        if any(filename.lower().endswith(fmt) for fmt in supported_formats):
            input_path = os.path.join(source_dir, filename)
            output_filename = os.path.splitext(filename)[0] + '.webp'
            output_path = os.path.join(webp_dir, output_filename)
            
            try:
                # Open and convert image
                image = Image.open(input_path)
                if image.mode in ('RGBA', 'LA'):
                    # Convert to RGB if image has alpha channel
                    background = Image.new('RGB', image.size, (255, 255, 255))
                    background.paste(image, mask=image.split()[-1])
                    image = background
                
                # Save as WebP
                image.save(output_path, 'WEBP', quality=80)
                print(f'Converted {filename} to {output_filename}')
            except Exception as e:
                print(f'Error converting {filename}: {str(e)}')

if __name__ == '__main__':
    convert_to_webp('images') 