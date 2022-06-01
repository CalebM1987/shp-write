import zip from './zip';
import { saveAs } from 'file-saver'

export default function(gj, options) {
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
