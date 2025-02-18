function RadionButtonComp({isSelected, isBig}) {
        return (
            <div style={{width: isBig ?'20px':'11px', height: isBig ?'20px':'11px', 
                         border:'3px #470477 solid', borderRadius:'100%',
                         display:'flex', alignItems:'center', justifyContent:'center'
                         }}>
                            {
                                isSelected ? (
                                    <div style={{width: isBig ?'15px':'8px', height: isBig ?'15px':'8px', 
                                          backgroundColor:'#470477', borderRadius:'100%',
                                        }}/>

                                ):(null)
                            }
             </div>
        )
}

export default RadionButtonComp