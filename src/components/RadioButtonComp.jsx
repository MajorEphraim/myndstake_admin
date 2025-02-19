import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircle } from '@fortawesome/free-regular-svg-icons';

function RadionButtonComp({isSelected, isBig}) {
        const btnSize = isBig ? '2x':'1x'
        return (
            <div>
                {isSelected ? (
                    <FontAwesomeIcon icon={faCircleDot} color='#470477' size={btnSize}/>
                  ) : (
                    <FontAwesomeIcon icon={faCircle} color='#470477' size={btnSize}/>
                  )}
                
             </div>
        )
}

export default RadionButtonComp