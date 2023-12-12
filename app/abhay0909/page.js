"use client";

import { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState([]);
  const [model, setmodel] = useState(false);
  const [modelUpdate, setmodelUpdate] = useState(false);
  const [selectedUpdateBlogId, setSelectedUpdateBlogId] = useState(null);
  const [selectedDeleteBlogId, setSelectedDeleteBlogId] = useState(null);
  const [toastAdd, settoastAdd] = useState(false);
  const [deleteToast, setdeleteToast] = useState(false);
  // add blog
  const [addBlog, setAddBlog] = useState({
    title: "",
    description: "",
  });
  const [updateBlog, setUpdateBlog] = useState({
    newTitle: "",
    newDescription: "",
  });
  // get data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fashinbuzz.com/api/blog");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        const reversedData = jsonData.topics.reverse();

        setData(reversedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  // delete data
  const handleBlogDelete = async (blogId) => {
    try {
      console.log(blogId, "blogId");
      // const res = await fetch(`https://fashinbuzz.com/api/blog/${blogId}`);
      const res = await fetch(`https://fashinbuzz.com/api/blog?id=${blogId}`, {
        method: "DELETE",
        headers: {
          id: blogId,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete blog post");
      }
      // Update the data after deletion
      // const updatedData = data.topics.filter((ele) => ele._id !== blogId);
      // setData({ topics: updatedData });
      setdeleteToast(true);
    } catch (error) {
      console.error("Error deleting blog post:", error.message);
    }
  };

  // update
  const handleBlogUpdate = async (blogId) => {
    try {
      console.log(blogId, "update blog api");

      const res = await fetch(
        `https://fashinbuzz.com/api/blog/id?id=${blogId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            id: blogId,
          },
          body: JSON.stringify(updateBlog),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add blog post");
      }
      // Update the data after adding a new blog post
      const updatedData = await res.json();
      setData((prevData) => ({
        topics: prevData?.topics?.map((ele) =>
          ele._id === blogId ? updatedData : ele
        ),
      }));
      setmodelUpdate(false);
    } catch (error) {
      console.error("Error adding blog post:", error.message);
    }
  };

  const showModal = (blogId) => {
    setSelectedDeleteBlogId(blogId);
    setmodel(!model);
  };
  const showUpdateModal = (blogId) => {
    // handleBlogUpdate(blogId);
    setSelectedUpdateBlogId(blogId);
    setmodelUpdate(true);
  };
  // add blog
  const handleAddBlog = async () => {
    try {
      console.log("add blog api");
      const res = await fetch("https://fashinbuzz.com/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addBlog),
      });

      if (!res.ok) {
        throw new Error("Failed to add blog post");
      }
      // Update the data after adding a new blog post
      // const newData = await res.json();
      // setData((prevData) => ({
      //   topics: [...prevData.topics, newData],
      // }));
      settoastAdd(true);
      setAddBlog({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding blog post:", error.message);
    }
  };

  return (
    <>
      <div className="grid gap-5 px-5 py-10 relative place-items-center sm:px-10">
        {/* add api */}
        <div className="border glass p-4 rounded-lg min-w-full sm:min-w-full">
          <p className="text-[#333333] font-semibold text-3xl text-center my-5">
            Add Blog Here....!
          </p>

          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={addBlog.title}
                onChange={(e) =>
                  setAddBlog((prevAddBlog) => ({
                    ...prevAddBlog,
                    title: e.target.value,
                  }))
                }
                placeholder="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="description"
              rows="6"
              value={addBlog.description}
              onChange={(e) =>
                setAddBlog((prevAddBlog) => ({
                  ...prevAddBlog,
                  description: e.target.value,
                }))
              }
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a description..."
            />
            <button
              className="bg-green-300 p-2 rounded-lg text-white mt-4"
              type="button"
              onClick={handleAddBlog}
            >
              Add Blog
            </button>
          </form>
          {toastAdd && (
            <div className="toast">
              <div className="alert alert-info">
                <span>New Blog added.</span>
              </div>
            </div>
          )}
        </div>

        {/* update model */}

        {/* get api */}
        <p className="text-[#333333] font-semibold text-3xl text-center">
          Blogs
        </p>
        {data?.length > 0 &&
          data?.map((ele) => (
            <>
              <div
                key={ele._id}
                className="grid gap-5 border-b-2 border-black pb-5 glass p-5 rounded-xl z-[1] min-w-full"
              >
                <p className="text-2xl font-semibold ">{ele.title}</p>
                <p className="text-[#333333] ">{ele.description}</p>
                <div className="flex justify-start gap-3 items-center">
                  <button
                    className="border border-black p-2 rounded-md font-semibold text-lg text-red-500"
                    // onClick={() => handleBlogDelete(ele._id)}
                    onClick={() => showModal(ele._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="border border-black rounded-md p-2 font-semibold text-lg text-green-700 relative"
                    // onClick={() => handleBlogUpdate(ele._id)}
                    onClick={() => showUpdateModal(ele._id)}
                  // onClick={() => {
                  //   console.log("true");
                  //   setmodelUpdate(true);
                  // }}
                  >
                    Update
                    {modelUpdate && selectedUpdateBlogId === ele._id && (
                      <div className="absolute top-[-320px] bg-[#333333] right-[-250px] border p-4 rounded-lg min-w-[320px] sm:min-w-[450px]">
                        <form className="max-w-sm  mx-auto sm:max-w-md">
                          <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-white ">
                              Title
                            </label>
                            <input
                              type="text"
                              id="title1"
                              value={updateBlog.newTitle}
                              onChange={(e) =>
                                setUpdateBlog((prevAddBlog) => ({
                                  ...prevAddBlog,
                                  newTitle: e.target.value,
                                }))
                              }
                              placeholder="title"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <label className="block mb-2 text-sm font-medium text-white">
                            Description
                          </label>
                          <textarea
                            id="description1"
                            rows="4"
                            value={updateBlog.newDescription}
                            onChange={(e) =>
                              setUpdateBlog((prevAddBlog) => ({
                                ...prevAddBlog,
                                newDescription: e.target.value,
                              }))
                            }
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Leave a description..."
                          />

                          <div className="flex justify-start items-center gap-4">
                            <button
                              className="bg-green-300 p-2 rounded-lg text-white mt-4"
                              type="button"
                              onClick={() => handleBlogUpdate(ele._id)}
                            >
                              Update Blog
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setmodelUpdate(false);
                              }}
                              type="button"
                              className="text-white p-2 mt-4 border rounded-lg"
                            >
                              close
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </button>
                </div>

                {/* delete */}
                {model && selectedDeleteBlogId === ele._id && (
                  <div
                    className=" p-2 rounded-lg flex justify-start text-center gap-5"
                    key={ele._id}
                  >
                    <button
                      onClick={() => handleBlogDelete(ele._id)}
                      className="bg-red-300 p-2 rounded-lg "
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setmodel(false)}
                      className="bg-green-300 p-2 rounded-lg "
                    >
                      Close
                    </button>
                  </div>
                )}
                {deleteToast && (
                  <div className="toast">
                    <div className="alert alert-info">
                      <span>Blog deleted...!</span>
                    </div>
                  </div>
                )}

                {/* update part */}
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Page;
