import React, { useState, useEffect } from "react";
import Select from "../components/ui/Select";
import Input from "../components/ui/Input";
import useAuthStore from "../store/authStore";
import UpdatePropertyImage from "../components/ui/UpdatePropertyImage";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { useNavigate, useParams } from "react-router-dom";
import PageLoader from "../components/ui/PageLoader";
import PageLayout from "../components/layout/PageLayout";

export default function UpdateListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [postData, setPostData] = useState({});
  const [images, setImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);

  const amenitiesOptions = [
    "pool",
    "gym",
    "security",
    "elevator",
    "balcony",
    "garden",
    "maid_room",
    "central_ac",
    "playground",
  ];
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    purpose: "",
    price: "",
    address: "",
    city: "",
    status: "",
    bedrooms: 0,
    bathrooms: 0,
    size: 0,
    furnished: false,
    petsAllowed: false,
    parkingSpaces: 0,
    electricityIncluded: false,
    waterIncluded: false,
    internetIncluded: false,
    gasIncluded: false,
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    amenities: [],
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    const imageData = new FormData();
    if (images.length < 2) {
      return setFormError("At least two images are required");
    }
    if (images.length > 5) {
      return setFormError("Cannot upload more than 5 images");
    }
    images.forEach((image) => {
      if (image instanceof File) {
        imageData.append("images", image);
      }
    });
    const hasNewImages = images.some((img) => img instanceof File);
    imageData.append("removedImages", JSON.stringify(removedImages));
    setLoading(true);
    try {
      await axiosInstance.patch(API_PATHS.POST.UPDATE(id), formData);
      if (hasNewImages || removedImages.length > 0) {
        await axiosInstance.post(API_PATHS.POST.ADDPICTURE(id), imageData);
      }
      navigate(`/list/${id}`);
    } catch (error) {
      console.error(error);
      setFormError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postData && postData._id) {
      setFormData({
        title: postData.title || "",
        description: postData.description || "",
        type: postData.type || "",
        purpose: postData.purpose || "",
        price: postData.price || "",
        status: postData.status || "",
        amenities: postData.amenities || [],
        address: postData.location?.address || "",
        city: postData.location?.city || "",
        bedrooms: postData.details?.bedrooms || 0,
        bathrooms: postData.details?.bathrooms || 0,
        size: postData.details?.size || 0,
        parkingSpaces: postData.details?.parkingSpaces || 0,
        furnished: postData.details?.furnished ?? false,
        petsAllowed: postData.details?.petsAllowed ?? false,
        electricityIncluded: postData.utilities?.electricityIncluded ?? false,
        waterIncluded: postData.utilities?.waterIncluded ?? false,
        internetIncluded: postData.utilities?.internetIncluded ?? false,
        gasIncluded: postData.utilities?.gasIncluded ?? false,
        contactName: postData.contact?.name || "",
        contactPhone: postData.contact?.phone || "",
        contactEmail: postData.contact?.email || "",
      });
      setImages(postData.images);
    }
  }, [postData]);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setFetching(true);
        const response = await axiosInstance.get(API_PATHS.POST.GETBYID(id));
        setPostData(response.data.data);
      } catch (error) {
        console.error(error);
        setFormError("Failed to fetch property details. Please try again.");
      } finally {
        setFetching(false);
      }
    };
    if (id) {
      fetchListing();
    }
  }, [id]);
  if (fetching) {
    return <PageLoader />;
  }
  if (!postData || !postData._id) {
    return (
      <div className="h-screen w-screen flex justify-center items-center text-gray-500">
        <span className="border border-gray-300 rounded-lg p-10 min-w-100 text-center">
          Post not found
        </span>
      </div>
    );
  }
  return (
    <PageLayout>
      <div className="flex flex-col gap-3 w-[95%] md:w-[80%] lg:w-[60%] mx-auto mb-0 mt-30">
        <h2 className="text-2xl font-semibold">Update Property Listing</h2>
        <h3 className="text-sm text-gray-500 font-medium">
          Modify the property details below
        </h3>

        <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
          <UpdatePropertyImage
            images={images}
            setImages={setImages}
            removedImages={removedImages}
            setRemovedImages={setRemovedImages}
          />

          <Input
            type="text"
            title="title"
            label="Property Title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
          />

          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-sm after:content-['_*'] after:text-red-500 after:text-lg after:align-middle"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter property description"
              value={formData.description}
              className="border border-black py-2 px-3 rounded-lg outline-none text-sm min-h-30"
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Select
              title="status"
              label="Property Status"
              options={["active", "sold", "rented", "inactive"]}
              value={formData.status}
              onChange={handleChange}
            />
            <Select
              title="type"
              label="Property Type"
              options={["apartment", "villa", "studio", "house"]}
              value={formData.type}
              onChange={handleChange}
            />
            <Select
              title="purpose"
              label="Purpose"
              options={["rent", "sale"]}
              value={formData.purpose}
              onChange={handleChange}
            />
          </div>

          <Input
            type="number"
            title="price"
            label="Price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
          />

          <h3 className="text-lg font-semibold mt-3">Location</h3>
          <Input
            type="text"
            title="address"
            label="Address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
          />
          <Input
            type="text"
            title="city"
            label="City"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
          />

          <h3 className="text-lg font-semibold mt-3">Property Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              type="number"
              title="bedrooms"
              label="Bedrooms"
              placeholder="No. of bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
            />
            <Input
              type="number"
              title="bathrooms"
              label="Bathrooms"
              placeholder="No. of bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
            />
            <Input
              type="number"
              title="size"
              label="Size (sq ft)"
              placeholder="Property size"
              value={formData.size}
              onChange={handleChange}
            />
            <Input
              type="number"
              title="parkingSpaces"
              label="Parking Spaces"
              placeholder="Parking spaces"
              value={formData.parkingSpaces}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm after:content-['_*'] after:text-red-500 after:text-lg after:align-middle">
                Furnished
              </label>
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="furnished"
                    checked={formData.furnished === true}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, furnished: true }))
                    }
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="furnished"
                    checked={formData.furnished === false}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, furnished: false }))
                    }
                  />
                  No
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm after:content-['_*'] after:text-red-500 after:text-lg after:align-middle">
                Pets Allowed
              </label>
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="petsAllowed"
                    checked={formData.petsAllowed === true}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, petsAllowed: true }))
                    }
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="petsAllowed"
                    checked={formData.petsAllowed === false}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, petsAllowed: false }))
                    }
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-3">Utilities Included</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "electricityIncluded",
              "waterIncluded",
              "internetIncluded",
              "gasIncluded",
            ].map((utility) => (
              <label key={utility} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={utility}
                  checked={formData[utility]}
                  onChange={handleChange}
                />
                {utility.replace("Included", "")}
              </label>
            ))}
          </div>

          <h3 className="text-lg font-semibold mt-3">Contact Information</h3>
          <Input
            type="text"
            title="contactName"
            label="Contact Name"
            placeholder="Enter contact name"
            value={formData.contactName}
            onChange={handleChange}
          />
          <Input
            type="text"
            title="contactPhone"
            label="Phone Number"
            placeholder="Enter phone number"
            value={formData.contactPhone}
            onChange={handleChange}
          />
          <Input
            type="email"
            title="contactEmail"
            label="Email"
            placeholder="Enter email"
            value={formData.contactEmail}
            onChange={handleChange}
          />

          <h3 className="text-lg font-semibold mt-3">Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {amenitiesOptions.map((amenity) => (
              <label key={amenity} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.amenities.includes(amenity)}
                  onChange={() => handleAmenityChange(amenity)}
                />
                {amenity}
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="btn-primary rounded-lg"
            disabled={loading}
          >
            {loading ? "Saving Changes..." : "Update Listing"}
          </button>
        </form>

        {formError && <p className="text-red-500 text-sm mt-2">{formError}</p>}
      </div>
    </PageLayout>
  );
}
