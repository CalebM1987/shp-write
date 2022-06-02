import zip from './zip';
import { saveAs } from 'file-saver'
import { getWriteOptions } from './utils';

export default function(gj, options) {
    options = getWriteOptions(options)
    return new Promise((resolve, reject)=> {
        try {
            zip(gj, options).then(blob => {
                saveAs(blob, options.name ?? 'Shapefile.zip')
                resolve(true)
            })
        } catch(err){
            reject(err)
        }
    })
};
