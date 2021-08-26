import React from 'react'
import styles from "./dashboardleft.module.css";
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";


const Dashboardleft = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChangecheck = (event) => {
      setChecked(event.target.checked);
    };
    
    return (
       <>
<Paper>

<div className={styles.checkdiv} >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWzJasTE1hLoKULMQCJ1HYIgQpyXjLVEtzqK02jGp0KUvwXftgCp8Cj1zdLjPa-Jhv_E&usqp=CAU" alt="" />
    </div>   
    <div  className={styles.checkdiv}>

        
       <div >
           <p className={styles.checkdivtext} >Distance to center</p>
    <span> <Checkbox
        // checked={checked}
        color="primary"
        onChange={handleChangecheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      Inside city center(469)
    </span>
</div>
<div>

    <span> <Checkbox
        // checked={checked}
        color="primary"
        onChange={handleChangecheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    2 km to center (159)
    </span>
    </div>
<div>
    <span> <Checkbox
        // checked={checked}
        color="primary"
        onChange={handleChangecheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          2-5km to center (131)

    </span>
    </div>

<div>
        <span> <Checkbox
                // checked={checked}
                color="primary"
                onChange={handleChangecheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
                      7km to center (201)

            </span>
        </div>
    
     <span> <Checkbox
        // checked={checked}
        color="primary"
        onChange={handleChangecheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
                10km to center (151)

    </span>
    </div>
    </Paper>
    <Paper>

    <div  className={styles.checkdiv}>

        
<div >
    <p className={styles.checkdivtext} >Neighbour</p>
<span> <Checkbox
 // checked={checked}
 color="primary"
 onChange={handleChangecheck}
 inputProps={{ 'aria-label': 'secondary checkbox' }}
/>
Indira Gandhi Int'l Airport(469)
</span>
</div>
<div>

<span> <Checkbox
 // checked={checked}
 color="primary"
 onChange={handleChangecheck}
 inputProps={{ 'aria-label': 'secondary checkbox' }}
/>
Gurgaon (159)
</span>
</div>
<div>
<span> <Checkbox
 // checked={checked}
 color="primary"
 onChange={handleChangecheck}
 inputProps={{ 'aria-label': 'secondary checkbox' }}
/>
   South Delhi (131)

</span>
</div>

<div>
 <span> <Checkbox
         // checked={checked}
         color="primary"
         onChange={handleChangecheck}
         inputProps={{ 'aria-label': 'secondary checkbox' }}
     />
               7km to center (201)

     </span>
 </div>

<span> <Checkbox
 // checked={checked}
 color="primary"
 onChange={handleChangecheck}
 inputProps={{ 'aria-label': 'secondary checkbox' }}
/>
         10km to center (151)

</span>
</div>
    </Paper>

       </>
    )
}

export default Dashboardleft
