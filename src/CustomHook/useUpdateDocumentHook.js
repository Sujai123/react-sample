import React,{useEffect} from 'react';

function useUpdateDocumentHook(count) {
    useEffect(() => {
        document.title=`Count:${count}`
    });
}

export default useUpdateDocumentHook;
