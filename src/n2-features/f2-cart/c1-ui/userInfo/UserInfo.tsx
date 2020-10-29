import React from 'react'
import styles from './UserInfo.module.css'

export const UserInfo = React.memo(() => {
    return (<div className={styles.userContactBlock}>
        <div>
            <input type="text" placeholder={'NAME'}/>
        </div>
        <div>
            <input type="text" placeholder={'SURNAME'}/>
        </div>
        <div>
            <input type="text" placeholder={'ADDRESS'}/>
        </div>
        <div>
            <input type="text" placeholder={'PHONE'}/>
        </div>
        <div>
            <button type={'submit'}>ORDER</button>
        </div>
    </div>);
})
