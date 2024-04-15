# Style2Clip

Small and lighweight library to copy html & css block into image format. 

## Installation

### npm

To install the package using npm, run the following command
```
npm install style2clip
```

### Direct Download

Alternatively, if you are not using npm you can download the final compiled file directly

1. Go to the release page on github
2. Download the zip file
4. Copy the `index.js` file into your project
5. For `typescript` project, copy the `index.d.ts` file into your project

## Usage

1. Import `Style2Clip` and make an instance
```typescript
import { Style2Clip } from 'style2clip';
let style2clip = Style2Clip.getInstance();
```
2. Set the your class name for the copy button
```typescript
style2clip.setButtonClassName(".your-button-class-name");
```
