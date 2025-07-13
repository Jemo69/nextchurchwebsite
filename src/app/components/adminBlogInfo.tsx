import React from 'react';
import { Trash2, Pencil } from 'lucide-react';

interface CardProps {
    slug: string;
    title: string;
    status: string;
    onDelete?: (slug: string) => void; // Optional delete handler
    onEdit?: (slug: string) => void;   // Optional edit handler
}

const Card: React.FC<CardProps> = ({ slug,title, status, onDelete, onEdit }) => {

    return (
        <div
            className="bg-background-200 rounded-lg p-4 shadow-lg border border-background-300
                       flex flex-col justify-between h-full"
        >
            <div>
                <h2 className="text-xl font-semibold text-text-700 mb-2">{title}</h2>
                <p className="text-accent-600">{status}</p>
            </div>
            <div className="mt-4 flex justify-end gap-2">
                {onEdit && (
                    <button
                        onClick={() => onEdit(slug)}
                        className="text-secondary-400 hover:text-primary-400 hover:bg-secondary-700"
                        title="Edit"
                    >
                        <Pencil className="h-4 w-4" />
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={() => onDelete(slug)}
                        className="text-secondary-400 hover:text-red-800 hover:bg-secondary-700"
                        title="Delete"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                )}
            </div>
        </div>
    );
};
export default Card;