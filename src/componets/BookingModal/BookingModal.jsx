import React, {  useContext, useState } from 'react'
import { Button, Modal } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useMutation } from 'react-query'
import UserDetailContext from "../../context/UserDetailContext"
import { bookVisit } from '../../utils/api'
import { toast } from 'react-toastify'
import { set } from 'lodash'
import dayjs from 'dayjs'



const BookingModal = ({opened, setOpened, email, propertyId}) => {

  const [value, setValue] = useState(null)
  const {userDetails : {token}, setUserDetails} = useContext(UserDetailContext)



  const handleBookingSuccess = () =>{
    toast.success("You have booked your visit successfully",{
      position: "bottom-right"
    })
    setUserDetails((prev)=> ({ // Taking the previous details of the user a prop
      ...prev,
      bookings:[
        ...prev.bookings,
        {
          id: propertyId, date: dayjs(value).format("DD/MM/YYYY")
        }
      ]
    }))
  }
   
  const {mutate, isLoading} = useMutation({
    mutationFn: ()=> bookVisit(value, propertyId, email,token ),
    onSuccess: ()=>handleBookingSuccess(),
    onError: ({response}) => toast.error(response.data.message),
    onSettled: ()=> setOpened(false)
  })
  return (
    <Modal
       opened={opened} 
      onClose={()=>setOpened(false)}
       title="Select your date of visit"
       centered
       >
       <div className='flexColCenter' style={{gap: "1rem"}}>
        <DatePicker  value={value} onChange={setValue} minDate={new Date()}/>
        <Button disabled={!value || isLoading} onClick={()=> mutate()}>
          Book a Visit
        </Button>
       </div>
    </Modal>
  )
}

export default BookingModal