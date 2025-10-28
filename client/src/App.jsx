// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Staff from "./components/admin-navs/Staff";
import Rooms from "./components/admin-navs/Rooms";
import Dashboard from "./components/admin-navs/Dashboard";
import Reservation from "./components/admin-navs/Reservation";
import CheckInOut from "./components/admin-navs/CheckInOut";
import Billing from "./components/admin-navs/Billing";
import Housekeeping from "./components/admin-navs/Housekeeping";
import Maintainance from "./components/admin-navs/Maintainance";
import Analytics from "./components/admin-navs/Analytics";
import Settings from "./components/admin-navs/Settings";
import AddStaff from "./components/admin-navs/AddStaff";
import AddRoom from "./components/admin-navs/AddRoom";
import AddReservation from "./components/admin-navs/AddReservation";
import AddCheckInOut from "./components/admin-navs/AddCheckInOut";
import GenerateInvoice from "./components/admin-navs/GenerateInvoice";
import AddNewTask from "./components/admin-navs/AddNewTask";
import AddNewRequest from "./components/admin-navs/AddNewRequest";
import StaffReservation from "./components/staff-navs/StaffReservation";
import ReservationDetails from "./components/staff-navs/ReservationDetails";
import StaffCheckInOut from "./components/staff-navs/StaffCheckInOut";
import StaffAddCheckinout from "./components/staff-navs/StaffAddCheckinout";
import StaffRoomStatus from "./components/staff-navs/StaffRoomStatus";
import UpdateRoomStatus from "./components/staff-navs/UpdateRoomStatus";
import StaffMaintainanceRequest from "./components/staff-navs/StaffMaintainanceRequest";
import AddMaintainanceRequest from "./components/staff-navs/AddMaintainanceRequest";
import StaffProfile from "./components/staff-navs/StaffProfile";
import EditProfile from "./components/staff-navs/EditProfile";
import MyBookings from "./components/guest-navs/MyBookings";
import BookingDetails from "./components/guest-navs/BookingDetails";
import GuestProfile from "./components/guest-navs/GuestProfile";
import EditGuestProfile from "./components/guest-navs/EditGuestProfile";
import GuestFeedback from "./components/guest-navs/GuestFeedback";
import GuestServiceRequest from "./components/guest-navs/GuestServiceRequest";
import Login from "./pages/Login";
import AppLayout from "./AppLayout";

const App = () => {
  return (
    <Router>
          <Routes>
            {/* ADMIN ROUTES */}
            <Route path="/" element={<AppLayout/>}>
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/staff" element={<Staff />} />
            <Route path="/admin/rooms" element={<Rooms />} />
            <Route path="/admin/reservation" element={<Reservation />} />
            <Route path="/admin/checkinout" element={<CheckInOut />} />
            <Route path="/admin/billing" element={<Billing />} />
            <Route path="/admin/housekeeping" element={<Housekeeping />} />
            <Route path="/admin/maintainance" element={<Maintainance />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/staff/addstaff" element={<AddStaff />} />
            <Route path="/admin/rooms/addroom" element={<AddRoom />} />
            <Route path="/admin/reservation/addreservation" element={<AddReservation />} />
            <Route path="/admin/checkinout/addcheckinout" element={<AddCheckInOut />} />
            <Route path="/admin/billing/generateinvoice" element={<GenerateInvoice />} />
            <Route path="/admin/housekeeping/addnewtask" element={<AddNewTask />} />
            <Route path="/admin/maintenance/addnewrequest" element={<AddNewRequest />} />
            
            {/* STAFF ROUTES */}

            <Route path="/staff/reservations" element={<StaffReservation />} />
            <Route path="/staff/reservations/:id" element={<ReservationDetails />} />
            <Route path="/staff/checkinout" element={<StaffCheckInOut />} />
            <Route path="/staff/checkinout/addcheckinout" element={<StaffAddCheckinout />} />
            <Route path="/staff/roomstatus" element={<StaffRoomStatus />} />
            <Route path="/staff/roomstatus/update/:id" element={<UpdateRoomStatus />} />
            <Route path="/staff/maintainancerequest" element={<StaffMaintainanceRequest />} />
            <Route path="/staff/maintenance/newmaintainancerequest" element={<AddMaintainanceRequest />} />
            <Route path="/staff/profile" element={<StaffProfile />} />
            <Route path="/staff/profile/editprofile" element={<EditProfile />} />

            {/* GUEST ROUTES */}
            <Route path="/guest/bookings" element={<MyBookings />} />
            <Route path="/guest/bookings/:id" element={<BookingDetails />} />
            <Route path="/guest/profile" element={<GuestProfile />} />
            <Route path="/guest/profile/editprofile" element={<EditGuestProfile />} />
            <Route path="/guest/feedback" element={<GuestFeedback />} />
            <Route path="/guest/servicerequest" element={<GuestServiceRequest />} />

           </Route>


           <Route path="/login" element={<Login/>}></Route>

          </Routes>
       
    </Router>
  );
};

export default App;
