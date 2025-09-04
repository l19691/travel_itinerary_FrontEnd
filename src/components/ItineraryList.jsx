import ItineraryCard from "./ItineraryCard";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function ItineraryList({ trips, deleteEntry, editEntry, reorderItinerary }) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(trips);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    reorderItinerary(items);
  };

  return (
    <div className="mt-6">
      {trips.length === 0 ? (
        <p className="text-center text-gray-500">No trips added yet.</p>
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="itinerary">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
              >
                {trips.map((trip, index) => (
                  <Draggable
                    key={trip.id}
                    draggableId={trip.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ItineraryCard
                          entry={trip}
                          deleteEntry={deleteEntry}
                          editEntry={editEntry}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}

export default ItineraryList;
