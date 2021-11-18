import { Pipe, PipeTransform } from '@angular/core';
const DEFAULT_IMAGE = 'cv.png';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(pathImg: string | undefined ): string {
    if( pathImg.trim().length ){
      return pathImg;
    }
    return DEFAULT_IMAGE;
  }

}
