import $ from "jquery";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProperty } from "../../redux/actions/propertiesAction";
import notify from "../../hook/useNotifaction";

const useAddProperty = () => {
  const [images, setImages] = useState([]);
  const [additionalDivImagesVisible, setAdditionalDivImagesVisible] = useState(true);
  const [additionalDivVideoVisible, setAdditionalDivVideoVisible] = useState(true);
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const res = useSelector((state) => state.propertyReducer.property);
  const [errors, setErrors] = useState({});

  const [propertyDetails, setPropertyDetails] = useState({
    name: "Luxury Apartment",
    description: "A spacious and modern apartment located in the heart of the city, offering breathtaking views and premium amenities.",
    phoneNumber: "1234567890",
    propertyType: "APARTMENT",
    area: "1200",
    street: "123 Main Street",
    country: "United States",
    city: "New York",
    zipCode: "10001",
    roomsNumber: "5",
    bathroomNumber: "2",
    bedroomNumber: "3",
    floorsNumber: "12",
    status: "USED",
    finishType: "HALF",
    price: "500000",
    paymentType: "CASH",
    // additionalFeatures: ["Balcony", "Smart Home System", "Private Parking"],
    media: [],
    amenities: [],
    facilities: [],
  });

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImages = [];
    const images = [];
    for (let i = 0; i < fileList.length; i++) {
      const imgUrl = URL.createObjectURL(fileList[i]);
      newImages.push(imgUrl);
      images.push(fileList[i]);
    }
    setImages((prevImages) => [...prevImages, ...newImages]);
    setPropertyDetails({ ...propertyDetails, media: [...propertyDetails.media, ...images] });
    setAdditionalDivImagesVisible(false);
  };

  const handleVideoChange = (e) => {
    const fileList = e.target.files;
    const newVideos = [];
    const videos = [];

    for (let i = 0; i < fileList.length; i++) {
      const videoUrl = URL.createObjectURL(fileList[i]);
      newVideos.push(videoUrl);
      videos.push(fileList[i]);
    }

    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
    setPropertyDetails((prevDetails) => ({ ...prevDetails, media: [...prevDetails.media, ...videos] }));
    setAdditionalDivVideoVisible(false);
  };

  const handleInputChange = (field, value) => {
    setPropertyDetails({
      ...propertyDetails,
      [field]: value,
    });
  };

  const handleFacilitiesChange = (selectedOptions) => {
    const valuesArray = selectedOptions ? selectedOptions.map((item) => item.value) : [];
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      facilities: valuesArray,
    }));
  };
  const handleAmenitiesChange = (selectedOptions) => {
    const valuesArray = selectedOptions ? selectedOptions.map((item) => item.value) : [];
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      amenities: valuesArray,
    }));
  };

  const statusRef = useRef();
  const finishTypeRef = useRef();
  const propertyTypeRef = useRef();
  const paymentTypeRef = useRef();
  const countryRef = useRef();

  useEffect(() => {
    $(statusRef.current).niceSelect();
    $(finishTypeRef.current).niceSelect();
    $(propertyTypeRef.current).niceSelect();
    $(paymentTypeRef.current).niceSelect();
    $(countryRef.current).niceSelect();

    $(statusRef.current).on("change", function () {
      const selectedValue = $(this).val();
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        status: selectedValue,
      }));
    });

    $(paymentTypeRef.current).on("change", function () {
      const selectedValue = $(this).val();
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        paymentType: selectedValue,
      }));
    });

    $(finishTypeRef.current).on("change", function () {
      const selectedValue = $(this).val();
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        finishType: selectedValue,
      }));
    });

    $(propertyTypeRef.current).on("change", function () {
      const selectedValue = $(this).val();
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        propertyType: selectedValue,
      }));
    });
    $(countryRef.current).on("change", function () {
      const selectedValue = $(this).val();
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        country: selectedValue,
      }));
    });

    return () => {
      $(statusRef.current).off("change");
      $(finishTypeRef.current).off("change");
      $(propertyTypeRef.current).off("change");
      $(paymentTypeRef.current).off("change");
      $(countryRef.current).off("change");
    };
  }, []);

  const validateForm = () => {
    const { name, description, phoneNumber, propertyType, area, roomsNumber, bathroomNumber, floorsNumber, status, finishType, price, paymentType, street, country, city, zipCode } = propertyDetails;

    const errors = [];

    if (!name) errors.push("Property name is required");
    if (!description) errors.push("Description is required");
    if (!phoneNumber) errors.push("Phone number is required");
    if (!propertyType) errors.push("Property type is required");
    if (!area) errors.push("Area is required");
    if (!roomsNumber) errors.push("Rooms number is required");
    if (!bathroomNumber) errors.push("Bathroom number is required");
    if (!floorsNumber) errors.push("Floors number is required");
    if (!status) errors.push("Status is required");
    if (!finishType) errors.push("Finish type is required");
    if (!price) errors.push("Price is required");
    if (!paymentType) errors.push("Payment type is required");
    if (!street) errors.push("Street is required");
    if (!country) errors.push("Country is required");
    if (!city) errors.push("City is required");
    if (!zipCode) errors.push("Zip code is required");

    return errors;
  };

  const onSubmit = async (e) => {
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => notify(error, "error"));
      return;
    }

    notify("Loading...", "info");

    const formData = new FormData();
    formData.append("name", propertyDetails.name);
    formData.append("description", propertyDetails.description);
    formData.append("phoneNumber", propertyDetails.phoneNumber);
    formData.append("propertyType", propertyDetails.propertyType);
    formData.append("area", propertyDetails.area);
    formData.append("street", propertyDetails.street);
    formData.append("country", propertyDetails.country);
    formData.append("city", propertyDetails.city);
    formData.append("zipCode", propertyDetails.zipCode);
    formData.append("roomsNumber", propertyDetails.roomsNumber);
    formData.append("bathroomNumber", propertyDetails.bathroomNumber);
    formData.append("bedroomNumber", propertyDetails.bedroomNumber);
    formData.append("floorsNumber", propertyDetails.floorsNumber);
    formData.append("status", propertyDetails.status);
    formData.append("finishType", propertyDetails.finishType);
    formData.append("price", propertyDetails.price);
    formData.append("paymentType", propertyDetails.paymentType);
    propertyDetails.media.map((item) => formData.append("media", item));
    propertyDetails.amenities.map((amenity) => {
      formData.append("amenities", amenity);
    });
    propertyDetails.facilities.map((facility) => {
      formData.append("facilities", facility);
    });

    await dispatch(createProperty(formData));
    setLoading(false);
  };

  useEffect(() => {
    console.log(propertyDetails);
  }, [propertyDetails]);

  useEffect(() => {
    if (loading == false) {
      if (res && res.status == 201) {
        notify("Property Added Successfully", "success");
      }
    }
  }, [loading, res]);

  const handleCancel = () => {
    setPropertyDetails({
      name: "",
      description: "",
      phoneNumber: "",
      propertyType: "",
      area: "",
      street: "",
      country: "",
      city: "",
      zipCode: "",
      roomsNumber: "",
      bathroomNumber: "",
      bedroomNumber: "",
      floorsNumber: "",
      status: "",
      finishType: "",
      price: "",
      paymentType: "",
      media: [],
      amenities: [],
      facilities: [],
    });
    setImages([]);
    setVideos([]);
  };
  return [propertyDetails, images, videos, additionalDivImagesVisible, additionalDivVideoVisible, handleImageChange, handleVideoChange, onSubmit, handleInputChange, handleFacilitiesChange, handleAmenitiesChange, statusRef, finishTypeRef, propertyTypeRef, paymentTypeRef, countryRef, handleCancel];
};

export default useAddProperty;
